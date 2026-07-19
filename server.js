app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(compression());

app.use("/api/v1", apiRoutes);

// Health route
app.get("/", (req, res) => {
    console.log("✅ Health route called");
    res.json({
        success: true,
        name: "Ayush Portfolio Backend",
        version: "1.0.0",
        status: "running",
        docs: "/api/v1",
        uptime: Math.floor(process.uptime())
    });
});

// 404 middleware
app.use(notFound);

// Error handler
app.use(errorHandler);