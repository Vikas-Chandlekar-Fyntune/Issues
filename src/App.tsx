import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-3">
        <Button>Click me</Button>

        <h1 className="p-4 pt-2 text-3xl font-bold text-red-500 underline">Hello world!</h1>
      </div>
    </>
  );
};

export default App;
