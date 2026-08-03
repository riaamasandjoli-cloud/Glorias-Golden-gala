import { Route, Switch, Router as WouterRouter } from 'wouter';
import Home from './pages/Home';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-primary font-display bg-background">
      <p className="tracking-widest uppercase">Page Not Found</p>
    </div>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
