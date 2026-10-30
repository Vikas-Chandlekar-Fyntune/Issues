import { Button } from '@/components/ui/button';

const App = () => {
  return (
    <>
      <div className="flex min-h-svh flex-col items-center justify-center gap-3">
        <Button>Click me</Button>

        <h1 className="text-3xl font-bold underline text-red-500">Hello world!</h1>
      </div>
    </>
  );
};

export default App;
