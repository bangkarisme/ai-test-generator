import TestGenerator from "@/components/TestGenerator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            AI Test Generator
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Multi-agent system powered by MiMo V2.5 that automatically generates
            comprehensive unit tests from your source code
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-purple-800/50 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-purple-200 text-sm">Powered by Xiaomi MiMo V2.5</span>
          </div>
        </header>
        <TestGenerator />
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">🔍 Code Analyzer Agent</h3>
            <p className="text-gray-300 text-sm">
              Parses source code AST, identifies functions, classes, and edge cases
              using MiMo V2.5 long-chain reasoning
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">🧪 Test Writer Agent</h3>
            <p className="text-gray-300 text-sm">
              Generates test cases with assertions, mocks, and edge case coverage
              via multi-agent collaboration
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-purple-500/20">
            <h3 className="text-lg font-semibold text-white mb-2">✅ Validator Agent</h3>
            <p className="text-gray-300 text-sm">
              Reviews generated tests for correctness, completeness, and best practices
              before final output
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
