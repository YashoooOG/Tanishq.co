export const blogPosts = [
  {
    id: 'log-001',
    slug: 'why-i-prefer-backend-development',
    logId: 'LOG_001',
    title: 'Why I Prefer Backend Development Over Frontend',
    date: 'Jan 12, 2025',
    readTime: '4 min read',
    tags: ['Backend', 'Opinion'],
    excerpt:
      "There's a certain satisfaction in building systems that work invisibly — APIs that respond in milliseconds, data pipelines that never break. Here's why backend engineering resonates with me.",
    content: [
      {
        type: 'paragraph',
        text: "When I first started writing code, I was drawn to the visual feedback of frontend development. A button changes color. A card animates. It feels immediate. But over time, I realized the parts of programming that excited me most were happening behind the scenes.",
      },
      {
        type: 'heading',
        text: 'The Invisible Machine',
      },
      {
        type: 'paragraph',
        text: "Backend systems are invisible in the best way. A user clicks a button and doesn't think about the authentication check, the database query, the cache hit, the serialized JSON response — but you built all of that. That invisibility is the goal.",
      },
      {
        type: 'heading',
        text: 'Architecture Over Aesthetics',
      },
      {
        type: 'paragraph',
        text: "I find myself more interested in questions like: How should this data be modeled? Should this be a synchronous or asynchronous operation? What's the right indexing strategy? These questions require deep thinking — the kind that I enjoy most.",
      },
      {
        type: 'quote',
        text: "Clean architecture is not about following a pattern. It's about structuring your system so that the business logic is isolated from everything else.",
      },
      {
        type: 'paragraph',
        text: "This doesn't mean I ignore frontend. A good full-stack developer needs both. But if I had to choose one domain to go deep in, it would always be the server side.",
      },
    ],
  },
  {
    id: 'log-002',
    slug: 'building-rest-apis-in-java',
    logId: 'LOG_002',
    title: 'Building Clean REST APIs in Java — My Approach',
    date: 'Jan 28, 2025',
    readTime: '6 min read',
    tags: ['Java', 'API Design', 'Backend'],
    excerpt:
      "REST API design is both a science and an art. Over time, I've developed a set of personal principles for building APIs that are predictable, scalable, and easy to consume.",
    content: [
      {
        type: 'paragraph',
        text: "Every backend developer writes REST APIs. But there's a significant difference between an API that works and an API that's a pleasure to use. The gap between them comes down to design discipline.",
      },
      {
        type: 'heading',
        text: 'Principle 1: Resources, Not Actions',
      },
      {
        type: 'paragraph',
        text: "Use nouns, not verbs in your endpoints. `/users/42` is a resource. `/getUser?id=42` is an action masquerading as a resource. HTTP methods (GET, POST, PUT, DELETE) already describe the action.",
      },
      {
        type: 'code',
        text: "// ✗ Bad\nGET /getUser?id=42\nPOST /createUser\n\n// ✓ Good\nGET /users/42\nPOST /users",
      },
      {
        type: 'heading',
        text: 'Principle 2: Consistent Error Responses',
      },
      {
        type: 'paragraph',
        text: "Every error response should follow the same structure. Use proper HTTP status codes. Include a machine-readable error code and a human-readable message. Never return 200 with an error body.",
      },
      {
        type: 'heading',
        text: 'Principle 3: Version Early',
      },
      {
        type: 'paragraph',
        text: "Put the version in the URL from day one. `/api/v1/users`. When you need to make breaking changes, `/api/v2/` exists without disrupting existing clients. This is much easier than retrofitting versioning later.",
      },
    ],
  },
  {
    id: 'log-003',
    slug: 'understanding-database-indexing',
    logId: 'LOG_003',
    title: 'Understanding Database Indexing — A Visual Guide',
    date: 'Feb 05, 2025',
    readTime: '7 min read',
    tags: ['MySQL', 'Database', 'Performance'],
    excerpt:
      "Indexes are the single most impactful optimization you can make to a slow database. Understanding how they work at a structural level changes how you design schemas.",
    content: [
      {
        type: 'paragraph',
        text: "Most developers know that indexes speed up queries. Fewer understand precisely why, or know when adding an index will hurt more than help. Let's fix that.",
      },
      {
        type: 'heading',
        text: 'What an Index Actually Is',
      },
      {
        type: 'paragraph',
        text: "An index is a separate data structure — typically a B-tree — that MySQL maintains alongside your table. It contains the indexed column's values and pointers to the corresponding table rows. A SELECT query can search the B-tree in O(log n) time rather than scanning every row.",
      },
      {
        type: 'heading',
        text: 'When Indexes Hurt',
      },
      {
        type: 'paragraph',
        text: "Every INSERT, UPDATE, or DELETE must also update all relevant indexes. Tables with many writes and few reads can actually become slower with excessive indexing. Benchmark both ways.",
      },
      {
        type: 'quote',
        text: "An index is a trade-off: faster reads at the cost of slower writes and additional storage. Make the trade consciously.",
      },
      {
        type: 'heading',
        text: 'Composite Indexes and Column Order',
      },
      {
        type: 'paragraph',
        text: "When creating a composite index on (a, b), queries filtering on (a), or (a AND b) benefit. Queries filtering only on (b) do not. Column order in a composite index matters enormously.",
      },
    ],
  },
  {
    id: 'log-004',
    slug: 'linux-tools-i-use-daily',
    logId: 'LOG_004',
    title: '10 Linux CLI Tools I Use Every Day',
    date: 'Feb 14, 2025',
    readTime: '5 min read',
    tags: ['Linux', 'CLI', 'Productivity'],
    excerpt:
      "After spending months on Linux as my primary development environment, these are the command-line tools that fundamentally changed my workflow.",
    content: [
      {
        type: 'paragraph',
        text: "The terminal is not a legacy interface. For a developer, it's the most powerful tool you have. Here are the utilities I reach for every single day.",
      },
      {
        type: 'heading',
        text: '1. fzf — Fuzzy Finder',
      },
      {
        type: 'paragraph',
        text: "fzf transforms any list into an interactive fuzzy-searchable interface. Pipe it with `history`, `find`, or `git log` and you'll never go back to scrolling manually.",
      },
      {
        type: 'heading',
        text: '2. ripgrep (rg)',
      },
      {
        type: 'paragraph',
        text: "A modern replacement for `grep`. Respects .gitignore, is significantly faster, and outputs with syntax highlighting by default. Essential for searching large codebases.",
      },
      {
        type: 'heading',
        text: '3. tmux',
      },
      {
        type: 'paragraph',
        text: "Terminal multiplexer. Run multiple terminal sessions inside one window, persist sessions across SSH disconnects, and build custom workspace layouts. Once you learn tmux, you don't develop without it.",
      },
      {
        type: 'heading',
        text: '4. htop',
      },
      {
        type: 'paragraph',
        text: "An improved, interactive version of top. Color-coded process tree, easy sorting, and process management all in one view.",
      },
    ],
  },
  {
    id: 'log-005',
    slug: 'git-workflow-for-solo-developers',
    logId: 'LOG_005',
    title: 'A Git Workflow for Solo Developers',
    date: 'Feb 20, 2025',
    readTime: '5 min read',
    tags: ['Git', 'Workflow', 'Best Practices'],
    excerpt:
      "Working alone doesn't mean skipping version control discipline. Here's the Git workflow I use on every project, no matter how small.",
    content: [
      {
        type: 'paragraph',
        text: "When you're working solo, it's tempting to commit everything to main with messages like 'fix' or 'update'. I've made that mistake. Now I treat my own projects with the same discipline as a team environment.",
      },
      {
        type: 'heading',
        text: 'Branch Per Feature',
      },
      {
        type: 'paragraph',
        text: "Every feature, bugfix, or experiment gets its own branch. This keeps main always deployable and gives you an isolated space to work without fear. Branches are cheap — use them liberally.",
      },
      {
        type: 'code',
        text: "git checkout -b feature/user-auth\n# work...\ngit commit -m 'feat: add JWT authentication middleware'\ngit checkout main\ngit merge --no-ff feature/user-auth",
      },
      {
        type: 'heading',
        text: 'Semantic Commit Messages',
      },
      {
        type: 'paragraph',
        text: "Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`. This makes your git log readable as a changelog and integrates with tools like semantic-release.",
      },
      {
        type: 'quote',
        text: "A commit message is documentation. Write it for the version of yourself six months from now.",
      },
    ],
  },
  {
    id: 'log-006',
    slug: 'react-architecture-lessons',
    logId: 'LOG_006',
    title: 'React Architecture Lessons from Building This Portfolio',
    date: 'Feb 20, 2025',
    readTime: '6 min read',
    tags: ['React', 'Architecture', 'Frontend'],
    excerpt:
      "Building this portfolio without any UI library forced me to think carefully about component boundaries, state management, and CSS architecture. Here's what I learned.",
    content: [
      {
        type: 'paragraph',
        text: "Most React tutorials teach you to use component libraries — and for good reason. But building from scratch reveals the mechanics that libraries abstract away.",
      },
      {
        type: 'heading',
        text: 'One CSS File Per Component',
      },
      {
        type: 'paragraph',
        text: "Keeping styles co-located with components keeps the project navigable. When you change a component, you know exactly where its styles live. No searching through a monolithic stylesheet.",
      },
      {
        type: 'heading',
        text: 'Data Separation',
      },
      {
        type: 'paragraph',
        text: "All dynamic content — projects, blog posts, skills — lives in dedicated data files. Components receive this as props. When you want to update content, you touch exactly one file.",
      },
      {
        type: 'heading',
        text: 'Intersection Observer for Animation',
      },
      {
        type: 'paragraph',
        text: "Rather than using a heavy animation library, the fade-in scroll animations in this portfolio use the native Intersection Observer API. Zero dependencies, smooth performance, full control.",
      },
    ],
  },
];
