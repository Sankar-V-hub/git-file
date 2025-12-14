#!/usr/bin/env node

/**
 * TIT Website - Automated Testing Suite
 * Tests all main routes and provides detailed feedback
 */

const BASE_URL = "http://localhost:3001";

const routes = [
  { path: "/", name: "Home Page", critical: true },
  { path: "/about", name: "About Page", critical: true },
  { path: "/about/leader/sankar-vengadesan", name: "Team Profile - Sankar", critical: false },
  { path: "/services", name: "Services Page", critical: true },
  { path: "/work", name: "Work/Portfolio Page", critical: true },
  { path: "/blog", name: "Blog Page", critical: true },
  { path: "/careers", name: "Careers Page", critical: true },
  { path: "/contact", name: "Contact/Let's Talk Page", critical: true },
];

async function testRoute(path, name, critical) {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "GET",
      headers: { "Accept": "text/html" },
      timeout: 15000,
    });

    const status = response.status;
    const isSuccess = status >= 200 && status < 300;
    const isCritical = critical ? "🔴 CRITICAL" : "🟡 NON-CRITICAL";

    let badge = isSuccess ? "✅ PASS" : "❌ FAIL";
    if (status === 500) badge = "💥 ERROR";
    if (status === 404) badge = "🚫 NOT FOUND";

    return {
      path,
      name,
      status,
      isSuccess,
      badge,
      severity: isCritical,
    };
  } catch (error) {
    return {
      path,
      name,
      status: "TIMEOUT",
      isSuccess: false,
      badge: "⏱️ TIMEOUT",
      severity: critical ? "🔴 CRITICAL" : "🟡 NON-CRITICAL",
      error: error.message,
    };
  }
}

async function runTests() {
  console.log("\n");
  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║          TIT WEBSITE - AUTOMATED TEST SUITE                  ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ Testing Base URL: ${BASE_URL.padEnd(52)} ║`);
  console.log("║ Test Time: " + new Date().toLocaleString().padEnd(53) + "║");
  console.log("╚══════════════════════════════════════════════════════════════╝\n");

  console.log("🧪 Running Route Tests...\n");

  const results = await Promise.all(
    routes.map((r) => testRoute(r.path, r.name, r.critical))
  );

  // Print detailed results
  results.forEach((result) => {
    console.log(`${result.badge} ${result.name}`);
    console.log(
      `   Path: ${result.path} | Status: ${result.status} | ${result.severity}`
    );
    if (result.error) {
      console.log(`   Error: ${result.error}`);
    }
    console.log("");
  });

  // Summary
  const passed = results.filter((r) => r.isSuccess).length;
  const failed = results.filter((r) => !r.isSuccess).length;
  const critical = results.filter((r) => r.severity === "🔴 CRITICAL" && !r.isSuccess);

  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║                      TEST SUMMARY                            ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ Total Tests: ${String(results.length).padStart(2)} | Passed: ${String(passed).padStart(2)} | Failed: ${String(failed).padStart(2)} | Critical Issues: ${String(critical.length).padStart(1)}`);
  console.log("╚══════════════════════════════════════════════════════════════╝\n");

  if (critical.length > 0) {
    console.log("⚠️  CRITICAL ISSUES DETECTED:\n");
    critical.forEach((r) => {
      console.log(`   • ${r.name} (${r.path})`);
    });
    console.log("\n");
  }

  if (failed === 0) {
    console.log("✨ All tests passed! Website is ready for production.\n");
  } else {
    console.log(`⚠️  ${failed} test(s) failed. Review errors above.\n`);
  }
}

runTests().catch(console.error);
