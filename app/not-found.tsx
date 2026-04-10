import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-foreground">404</h1>
        <p className="mt-4 text-2xl font-bold text-muted-foreground">
          Página não encontrada
        </p>
        <p className="mt-2 text-muted-foreground">
          A página que você está procurando não existe.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Voltar para o início</Link>
        </Button>
      </div>
    </div>
  );
}
