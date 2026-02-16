import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import SectionWrapper from "@/components/SectionWrapper";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const barData = [
  { name: "Physical", value: 34, fill: "hsl(270, 70%, 50%)" },
  { name: "Sexual", value: 13, fill: "hsl(270, 80%, 65%)" },
  { name: "Emotional", value: 28, fill: "hsl(260, 10%, 40%)" },
];

const pieData = [
  { name: "Women", value: 90 },
  { name: "Men", value: 10 },
];

const pieColors = ["hsl(270, 70%, 50%)", "hsl(260, 10%, 30%)"];

const regionData = [
  { region: "Migori", value: "50%+", level: "high" },
  { region: "Kajiado", value: "~36%", level: "medium-high" },
  { region: "National Avg", value: "34%", level: "medium" },
];

const DataDashboard = () => {
  return (
    <div>
      {/* HEADER */}
      <section className="gradient-hero pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="container-narrow mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight fade-in-up">
            Gender-Based Violence in Kenya
          </h1>
          <p className="mt-2 text-lg sm:text-xl gradient-purple-text font-display font-semibold fade-in-up-delay-1">
            The Reality Behind the Mission
          </p>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base fade-in-up-delay-2">
            These figures are based on national survey data and public reports. Behind every statistic is a human story — and a system that must change.
          </p>
        </div>
      </section>

      {/* ANIMATED COUNTERS */}
      <section className="section-padding bg-background">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <AnimatedCounter end={34} label="Physical Violence" description="of women in Kenya have experienced physical violence since age 15." source="KDHS 2022" />
              <AnimatedCounter end={16} label="Recent Violence" description="of women experienced physical violence in the past 12 months." source="KDHS 2022" />
              <AnimatedCounter end={13} prefix="~" label="Sexual Violence" description="Approximately 1 in 8 women report experiencing sexual violence." source="KDHS 2022" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <AnimatedCounter end={90} label="GBV Cases by Gender" description="Women account for nearly 90% of reported GBV cases." />
              <AnimatedCounter end={41} suffix="B" prefix="KES " label="Economic Cost" description="GBV costs Kenya an estimated KES 41 billion annually." />
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* CHARTS */}
      <section className="section-padding gradient-section">
        <SectionWrapper>
          <div className="container-narrow mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
              {/* Bar Chart */}
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-display font-semibold text-lg mb-6">Prevalence of Violence by Type</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} layout="vertical">
                      <XAxis type="number" domain={[0, 40]} tick={{ fill: "hsl(260, 10%, 60%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                      <YAxis type="category" dataKey="name" tick={{ fill: "hsl(0, 0%, 90%)", fontSize: 13 }} axisLine={false} tickLine={false} width={80} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(260, 20%, 10%)",
                          border: "1px solid hsl(260, 15%, 18%)",
                          borderRadius: "12px",
                          color: "white",
                          fontSize: 13,
                        }}
                        formatter={(value: number) => [`${value}%`, "Prevalence"]}
                      />
                      <Bar dataKey="value" radius={[0, 8, 8, 0]} barSize={28}>
                        {barData.map((entry, i) => (
                          <Cell key={i} fill={entry.fill} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="glass-card p-6 sm:p-8">
                <h3 className="font-display font-semibold text-lg mb-6">Reported GBV Cases by Gender</h3>
                <div className="h-64 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={4}
                        dataKey="value"
                        stroke="none"
                      >
                        {pieData.map((_, i) => (
                          <Cell key={i} fill={pieColors[i]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(260, 20%, 10%)",
                          border: "1px solid hsl(260, 15%, 18%)",
                          borderRadius: "12px",
                          color: "white",
                          fontSize: 13,
                        }}
                        formatter={(value: number) => [`${value}%`, ""]}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                      <p className="text-xs text-muted-foreground">Gender</p>
                      <p className="text-sm font-semibold">Disparity</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-6 mt-4">
                  {pieData.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: pieColors[i] }} />
                      <span className="text-xs text-muted-foreground">{d.name} ({d.value}%)</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Heat Map */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="font-display font-semibold text-lg mb-6">Regional Variations in GBV</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {regionData.map((r, i) => (
                  <div
                    key={i}
                    className={`p-5 rounded-xl text-center transition-all duration-300 ${
                      r.level === "high"
                        ? "bg-primary/25 border border-primary/40"
                        : r.level === "medium-high"
                        ? "bg-primary/15 border border-primary/25"
                        : "bg-primary/8 border border-primary/15"
                    }`}
                  >
                    <p className="text-2xl sm:text-3xl font-display font-bold gradient-purple-text">{r.value}</p>
                    <p className="text-sm text-foreground font-medium mt-1">{r.region}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 mt-6 justify-center">
                <span className="text-xs text-muted-foreground">Prevalence:</span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/15" />
                  <span className="text-xs text-muted-foreground">Moderate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/40" />
                  <span className="text-xs text-muted-foreground">High</span>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </section>

      {/* CONTEXT */}
      <section className="section-padding bg-background">
        <SectionWrapper>
          <div className="container-narrow mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Why This <span className="gradient-purple-text">Matters</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
              Gender-based violence is not only a social issue — it is a public health, economic, and systemic crisis. The data reveals urgency. The solution requires innovation, community, and infrastructure.
            </p>
            <p className="text-foreground max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              EveShield exists to bridge the gap between risk and response.
            </p>

            <div className="glass-card p-8 sm:p-12 glow-purple max-w-3xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-4">
                Data Shows the Problem.{" "}
                <span className="gradient-purple-text">Technology Can Help Build the Response.</span>
              </h3>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm glow-purple-hover transition-all duration-300 hover:bg-accent mt-4"
              >
                Join the Early Access Movement
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </SectionWrapper>
      </section>
    </div>
  );
};

export default DataDashboard;
