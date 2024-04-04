import UrlForm from "./components/url-form";

function App() {
  return (
    <div className="container mx-auto p-2 font-sans">
      <h1 className="text-center text-gray-100 text-sm">yDown</h1>

      <hr className="h-px my-3 bg-white/20 border-0 rounded-md" />

      <UrlForm />
    </div>
  );
}

export default App;
