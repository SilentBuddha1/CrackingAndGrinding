import heapq
from typing import List, Tuple, Dict, Set

class Node:
    def __init__(self, position: Tuple[int, int], g: float = float('inf'), h: float = 0):
        self.position = position  # (row, col)
        self.g = g  # Cost from start to this node
        self.h = h  # Heuristic estimate to goal
        self.f = g + h  # Total estimated cost
        self.parent = None  # For path reconstruction

    def __lt__(self, other):
        return self.f < other.f

def manhattan_distance(pos1: Tuple[int, int], pos2: Tuple[int, int]) -> float:
    """Calculate Manhattan distance between two points."""
    return abs(pos1[0] - pos2[0]) + abs(pos1[1] - pos2[1])

def astar(grid: List[List[int]], start: Tuple[int, int], goal: Tuple[int, int]) -> List[Tuple[int, int]]:
    """Find shortest path from start to goal using A* algorithm."""
    rows, cols = len(grid), len(grid[0])
    start_node = Node(start, g=0, h=manhattan_distance(start, goal))
    open_set: List[Node] = [start_node]  # Priority queue for nodes to explore
    closed_set: Set[Tuple[int, int]] = set()  # Visited positions
    nodes: Dict[Tuple[int, int], Node] = {start: start_node}  # All nodes
    directions = [(-1, 0), (0, 1), (1, 0), (0, -1)]  # Up, right, down, left

    while open_set:
        current = heapq.heappop(open_set)
        if current.position == goal:
            path = []
            while current:
                path.append(current.position)
                current = current.parent
            return path[::-1]

        closed_set.add(current.position)
        for dx, dy in directions:
            next_pos = (current.position[0] + dx, current.position[1] + dy)
            if (0 <= next_pos[0] < rows and 0 <= next_pos[1] < cols and 
                next_pos not in closed_set and grid[next_pos[0]][next_pos[1]] == 0):
                tentative_g = current.g + 1
                if next_pos not in nodes:
                    nodes[next_pos] = Node(next_pos)
                neighbor = nodes[next_pos]
                if tentative_g < neighbor.g:
                    neighbor.parent = current
                    neighbor.g = tentative_g
                    neighbor.h = manhattan_distance(next_pos, goal)
                    neighbor.f = neighbor.g + neighbor.h
                    if neighbor not in open_set:
                        heapq.heappush(open_set, neighbor)
    return []

def get_valid_int(prompt: str, min_val: int, max_val: int = None) -> int:
    """Get a valid integer input within specified range."""
    while True:
        try:
            value = int(input(prompt))
            if value < min_val or (max_val is not None and value > max_val):
                print(f"Please enter a number {'≥ ' + str(min_val) if max_val is None else 'between ' + str(min_val) + ' and ' + str(max_val)}.")
            else:
                return value
        except ValueError:
            print("Please enter a valid integer.")

def get_position(prompt: str, rows: int, cols: int, grid: List[List[int]], occupied: Set[Tuple[int, int]]) -> Tuple[int, int]:
    """Get a valid grid position that’s not an obstacle or occupied."""
    while True:
        row = get_valid_int(f"{prompt} row (0 to {rows-1}): ", 0, rows-1)
        col = get_valid_int(f"{prompt} column (0 to {cols-1}): ", 0, cols-1)
        pos = (row, col)
        if pos in occupied:
            print("This position is already occupied or an obstacle.")
        elif grid[row][col] == 1:
            print("This position is an obstacle.")
        else:
            return pos

def display_grid(grid: List[List[int]], start: Tuple[int, int], goal: Tuple[int, int], path: List[Tuple[int, int]]):
    """Display the grid with start, goal, obstacles, and path."""
    display_grid = [['.' if grid[r][c] == 0 else '#' for c in range(len(grid[0]))] for r in range(len(grid))]
    for r, c in path:
        if (r, c) != start and (r, c) != goal:
            display_grid[r][c] = '*'
    display_grid[start[0]][start[1]] = 'S'
    display_grid[goal[0]][goal[1]] = 'G'
    print("\nGrid with path (S=start, G=goal, #=obstacle, *=path, .=empty):")
    for row in display_grid:
        print(' '.join(row))

def main():
    """Main function to collect user input and run A* pathfinding."""
    print("Create a grid for A* pathfinding (0 = walkable, 1 = obstacle).")
    rows = get_valid_int("Enter number of rows (min 1): ", 1)
    cols = get_valid_int("Enter number of columns (min 1): ", 1)

    # Initialize empty grid
    grid = [[0 for _ in range(cols)] for _ in range(rows)]
    occupied = set()

    # Get obstacles
    num_obstacles = get_valid_int("Enter number of obstacles (0 or more): ", 0)
    for i in range(num_obstacles):
        print(f"Obstacle {i+1}:")
        row = get_valid_int(f"  Row (0 to {rows-1}): ", 0, rows-1)
        col = get_valid_int(f"  Column (0 to {cols-1}): ", 0, cols-1)
        pos = (row, col)
        if pos not in occupied:
            grid[row][col] = 1
            occupied.add(pos)
        else:
            print("Position already taken. Skipping this obstacle.")

    # Get start and goal positions
    start = get_position("Start position", rows, cols, grid, occupied)
    occupied.add(start)
    goal = get_position("Goal position", rows, cols, grid, occupied)

    # Run A* algorithm
    path = astar(grid, start, goal)
    if path:
        print("\nPath found:", path)
        display_grid(grid, start, goal, path)
    else:
        print("\nNo path found.")

if __name__ == "__main__":
    main()