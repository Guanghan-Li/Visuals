(() => {
  const MS_PER_DAY = 24 * 60 * 60 * 1000;

  const dataset = {
    data: [
      {
        TaskID: 1,
        TaskName: "BSF Chicken Feeder",
        StartDate: "2025-10-21T15:00:00.000Z",
        EndDate: "2025-12-04T01:00:00.000Z",
        Duration: 44,
        Predecessor: null,
        resources: [],
        Progress: 1,
        color: "301",
        info: "<p><br></p>",
        DurationUnit: "day",
        subtasks: [
          {
            TaskID: 2,
            TaskName: "Finalize Design",
            StartDate: "2025-10-21T15:00:00.000Z",
            EndDate: "2025-10-24T00:00:00.000Z",
            Duration: 3,
            Predecessor: "",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 30,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 3,
            TaskName: "Materials List/BOM",
            StartDate: "2025-10-22T15:00:00.000Z",
            EndDate: "2025-10-24T00:00:00.000Z",
            Duration: 2,
            Predecessor: "2FS-2 days",
            resources: [
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 4,
            TaskName: "Gather Material",
            StartDate: "2025-10-24T15:00:00.000Z",
            EndDate: "2025-10-26T00:00:00.000Z",
            Duration: 2,
            Predecessor: "3FS",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 5,
            TaskName: "Construct Bin",
            StartDate: "2025-10-25T15:00:00.000Z",
            EndDate: "2025-10-28T00:00:00.000Z",
            Duration: 3,
            Predecessor: "4FS-1 days",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 6,
            TaskName: "Assemble Bin",
            StartDate: "2025-10-27T15:00:00.000Z",
            EndDate: "2025-10-31T00:00:00.000Z",
            Duration: 4,
            Predecessor: "5FS-1 days",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 7,
            TaskName: "Construct Cup",
            StartDate: "2025-10-24T15:00:00.000Z",
            EndDate: "2025-10-28T00:00:00.000Z",
            Duration: 4,
            Predecessor: "",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 }
            ],
            Progress: 0,
            color: "121",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 8,
            TaskName: "Assemble Cup",
            StartDate: "2025-10-27T15:00:00.000Z",
            EndDate: "2025-10-31T00:00:00.000Z",
            Duration: 4,
            Predecessor: "7FS-1 days",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "121",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 9,
            TaskName: "Measure Success",
            StartDate: "2025-10-31T15:00:00.000Z",
            EndDate: "2025-11-15T01:00:00.000Z",
            Duration: 15,
            Predecessor: "6FS,8FS",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 10,
            TaskName: "Design Second Iteration Ideas",
            StartDate: "2025-11-14T16:00:00.000Z",
            EndDate: "2025-11-20T01:00:00.000Z",
            Duration: 6,
            Predecessor: "9FS-1 days",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 11,
            TaskName: "Second Iteration Implementation",
            StartDate: "2025-11-19T16:00:00.000Z",
            EndDate: "2025-11-27T01:00:00.000Z",
            Duration: 8,
            Predecessor: "10FS-1 days",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          },
          {
            TaskID: 12,
            TaskName: "Final Presentation and Deliverables",
            StartDate: "2025-10-31T15:00:00.000Z",
            EndDate: "2025-12-04T01:00:00.000Z",
            Duration: 34,
            Predecessor: "",
            resources: [
              { resourceId: "Guanghan", resourceName: "Guanghan", unit: 100 },
              { resourceId: "Isaac", resourceName: "Isaac", unit: 100 },
              { resourceId: "John", resourceName: "John", unit: 100 },
              { resourceId: "Renee", resourceName: "Renee", unit: 100 }
            ],
            Progress: 0,
            color: "211",
            info: "<p><br></p>",
            DurationUnit: "day"
          }
        ]
      }
    ],
    resources: [
      { resourceId: "Guanghan", resourceName: "Guanghan" },
      { resourceId: "Isaac", resourceName: "Isaac" },
      { resourceId: "John", resourceName: "John" },
      { resourceId: "Renee", resourceName: "Renee" }
    ],
    projectStartDate: null,
    projectEndDate: null,
    advanced: {
      columns: [
        { name: "Task ID", width: "70", show: true },
        { name: "Task Name", width: "350", show: true },
        { name: "Start Date", width: "130", show: false },
        { name: "End Date", width: "130", show: false },
        { name: "Duration", width: "130", show: false },
        { name: "Progress %", width: "150", show: false },
        { name: "Dependency", width: "150", show: false },
        { name: "Resources", width: "200", show: false },
        { name: "Color", width: "100", show: false }
      ],
      zoomLevel: 0,
      timezone: "America/Los_Angeles",
      timezoneOffset: 420,
      dependencyConflict: "Add Offset to Dependency",
      dateFormat: "yyyy-MM-dd",
      timeFormat: "HH:mm",
      firstDayOfWeek: 0,
      workWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      workTime: [
        { from: 8, to: 12 },
        { from: 13, to: 17 }
      ],
      holidays: []
    }
  };

  const colorClassMap = {
    "211": "chart__bar--structure",
    "121": "chart__bar--feeder",
    "301": "chart__bar--program"
  };

  const colorLabels = {
    "211": "Structure & Iteration",
    "121": "Feeder Cup",
    "301": "Program Oversight"
  };

  const projectTimeZone = dataset.advanced?.timezone || "UTC";
  const projectOffsetMinutes = dataset.advanced?.timezoneOffset ?? 0;
  const projectOffsetMs = projectOffsetMinutes * 60 * 1000;

  document.addEventListener("DOMContentLoaded", () => {
    const chartEl = document.getElementById("timelineChart");
    const summaryEl = document.getElementById("chartSummary");
    if (!chartEl || !summaryEl) {
      return;
    }

    const tasks = flattenTasks(dataset);
    if (!tasks.length) {
      chartEl.innerHTML = "<p>No tasks available.</p>";
      summaryEl.textContent = "";
      return;
    }

    const projectStartDayMs = tasks.reduce((min, task) => Math.min(min, task.startDayMs), Infinity);
    const projectEndBoundaryMs = tasks.reduce((max, task) => Math.max(max, task.endBoundaryMs), -Infinity);
    const totalDays = Math.max(1, Math.round((projectEndBoundaryMs - projectStartDayMs) / MS_PER_DAY));

    renderChart(chartEl, tasks, projectStartDayMs, totalDays);
    renderSummary(summaryEl, tasks, projectStartDayMs, projectEndBoundaryMs, totalDays);
  });

  function flattenTasks(data) {
    const project = data?.data?.[0];
    if (!project) {
      return [];
    }
    const flattened = [];
    flattened.push(normalizeTask(project, true));
    (project.subtasks || []).forEach((task) => {
      flattened.push(normalizeTask(task, false));
    });
    return flattened;
  }

  function normalizeTask(task, isGroup) {
    const startProjectMs = toProjectMs(task.StartDate);
    const startDayMs = startOfProjectDay(startProjectMs);
    const durationDays = normalizeDuration(task.Duration);
    const endBoundaryMs = startDayMs + durationDays * MS_PER_DAY;
    const dependencies = parseDependencies(task.Predecessor);
    const resources = Array.isArray(task.resources)
      ? task.resources.map((res) => res.resourceName || res.resourceId).filter(Boolean)
      : [];
    const progress = typeof task.Progress === "number" ? task.Progress : 0;

    return {
      id: task.TaskID,
      title: task.TaskName,
      color: task.color,
      durationDays,
      startDayMs,
      endBoundaryMs,
      progress,
      resources,
      dependencies,
      isGroup: Boolean(isGroup)
    };
  }

  function toProjectMs(isoString) {
    if (!isoString) {
      return null;
    }
    const utcMs = Date.parse(isoString);
    if (!Number.isFinite(utcMs)) {
      return null;
    }
    return utcMs - projectOffsetMs;
  }

  function startOfProjectDay(ms) {
    if (!Number.isFinite(ms)) {
      return 0;
    }
    return Math.floor(ms / MS_PER_DAY) * MS_PER_DAY;
  }

  function normalizeDuration(duration) {
    if (Number.isFinite(duration) && duration > 0) {
      return duration;
    }
    return 1;
  }

  function parseDependencies(raw) {
    if (!raw) {
      return [];
    }
    return raw
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean);
  }

  function renderChart(root, tasks, projectStartDayMs, totalDays) {
    root.innerHTML = "";

    const grid = document.createElement("div");
    grid.className = "chart__grid";
    root.appendChild(grid);

    const rows = document.createElement("div");
    rows.className = "chart__rows";
    root.appendChild(rows);

    tasks.forEach((task) => {
      const row = document.createElement("div");
      row.className = "chart__row";
      if (task.isGroup) {
        row.classList.add("chart__row--group");
      }

      const label = document.createElement("div");
      label.className = "chart__label";
      if (task.isGroup) {
        const groupBits = [`${task.durationDays}d span`];
        const theme = colorLabels[task.color];
        if (theme) {
          groupBits.push(theme);
        }
        label.innerHTML = `<strong>#${task.id}</strong><small>${groupBits.join(" • ")}</small>`;
      } else {
        const metaBits = [`${task.durationDays}d`, `${task.progress}%`];
        if (task.resources.length) {
          metaBits.push(task.resources.join(", "));
        }
        if (task.dependencies.length) {
          metaBits.push(`deps ${task.dependencies.length}`);
        }
        label.innerHTML = `<strong>#${task.id} ${task.title}</strong>`;
        label.innerHTML += `<small>${metaBits.join(" • ")}</small>`;
      }

      const barWrapper = document.createElement("div");
      barWrapper.className = "chart__bar-wrapper";

      const offsetPercent = getOffsetPercent(task.startDayMs, projectStartDayMs, totalDays);
      const widthPercent = getWidthPercent(task.durationDays, totalDays, offsetPercent);

      if (task.isGroup) {
        const lineWidth = Math.max(widthPercent, 0.5);
        const line = document.createElement("div");
        line.className = "chart__group-line";
        line.style.left = `${offsetPercent}%`;
        line.style.width = `${lineWidth}%`;

        const titleOverlay = document.createElement("div");
        titleOverlay.className = "chart__group-title";
        titleOverlay.textContent = task.title;
        const centerPercent = Math.min(100, Math.max(0, offsetPercent + lineWidth / 2));
        titleOverlay.style.left = `${centerPercent}%`;

        barWrapper.append(line, titleOverlay);
      } else if (task.durationDays <= 1) {
        const milestone = document.createElement("div");
        milestone.className = "chart__milestone";
        milestone.style.left = `${offsetPercent}%`;

        const milestoneLabel = document.createElement("div");
        milestoneLabel.className = "chart__milestone-label";
        milestoneLabel.style.left = `${offsetPercent}%`;
        milestoneLabel.textContent = formatDate(task.startDayMs);

        barWrapper.append(milestone, milestoneLabel);
      } else {
        const bar = document.createElement("div");
        bar.className = "chart__bar";
        const colorClass = colorClassMap[task.color];
        if (colorClass) {
          bar.classList.add(colorClass);
        }
        bar.style.left = `${offsetPercent}%`;
        bar.style.width = `${widthPercent}%`;

        const endDisplayMs = task.endBoundaryMs - MS_PER_DAY;
        bar.title = [
          `${task.title}`,
          `${formatFullDate(task.startDayMs)} → ${formatFullDate(endDisplayMs)}`,
          `Progress: ${task.progress}%`,
          task.resources.length ? `Resources: ${task.resources.join(", ")}` : "Resources: —",
          task.dependencies.length ? `Dependencies: ${task.dependencies.join(", ")}` : "Dependencies: —"
        ].join("\n");

        const span = document.createElement("span");
        span.textContent = `${task.durationDays}d`;
        bar.appendChild(span);

        barWrapper.appendChild(bar);
      }

      row.append(label, barWrapper);
      rows.appendChild(row);
    });
  }

  function renderSummary(target, tasks, projectStartDayMs, projectEndBoundaryMs, totalDays) {
    const workTasks = tasks.filter((task) => !task.isGroup);
    const uniqueResources = new Set();
    workTasks.forEach((task) => {
      task.resources.forEach((name) => uniqueResources.add(name));
    });
    const dependencyCount = workTasks.reduce((sum, task) => sum + task.dependencies.length, 0);
    const avgProgress = workTasks.length
      ? Math.round(workTasks.reduce((sum, task) => sum + task.progress, 0) / workTasks.length)
      : 0;

    const phaseCounts = workTasks.reduce((acc, task) => {
      const label = colorLabels[task.color];
      if (!label) {
        return acc;
      }
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});

    const summaryParts = [
      `<strong>${formatFullDate(projectStartDayMs)}</strong> start`,
      `<strong>${formatFullDate(projectEndBoundaryMs - MS_PER_DAY)}</strong> finish`,
      `<strong>${totalDays}</strong> days`,
      `<strong>${workTasks.length}</strong> tasks`,
      `<strong>${uniqueResources.size}</strong> contributors`,
      `<strong>${avgProgress}%</strong> avg progress`,
      `<strong>${dependencyCount}</strong> dependencies`
    ];

    const phaseBreakdown = Object.entries(phaseCounts).map(
      ([label, count]) => `${count} ${label.toLowerCase()}`
    );
    if (phaseBreakdown.length) {
      summaryParts.push(phaseBreakdown.join(" · "));
    }

    target.innerHTML = summaryParts.join(" · ");
  }

  function getOffsetPercent(startDayMs, projectStartDayMs, totalDays) {
    const offsetDays = Math.max(0, (startDayMs - projectStartDayMs) / MS_PER_DAY);
    if (totalDays <= 0) {
      return 0;
    }
    return (offsetDays / totalDays) * 100;
  }

  function getWidthPercent(durationDays, totalDays, offsetPercent) {
    if (totalDays <= 0) {
      return 0;
    }
    const raw = (durationDays / totalDays) * 100;
    const available = Math.max(0, 100 - offsetPercent);
    return Math.max(Math.min(raw, available), raw > 0 ? 2 : 0);
  }

  function formatDate(dayMs) {
    if (!Number.isFinite(dayMs)) {
      return "";
    }
    const date = new Date(dayMs + projectOffsetMs);
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      timeZone: projectTimeZone
    }).format(date);
  }

  function formatFullDate(dayMs) {
    if (!Number.isFinite(dayMs)) {
      return "";
    }
    const date = new Date(dayMs + projectOffsetMs);
    return new Intl.DateTimeFormat(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: projectTimeZone
    }).format(date);
  }
})();
