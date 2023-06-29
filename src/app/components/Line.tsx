interface LineProps {
  space?: boolean;
}

export function Line({ space }: LineProps) {
  return (
    <div className={`h-[1px] w-full bg-zinc-200 ${space && "my-4"}`}></div>
  );
}
