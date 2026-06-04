export default function GradientBlobs() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        className="absolute w-[600px] h-[600px] rounded-full -top-[200px] -left-[100px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #7c6af7, transparent)',
          filter: 'blur(120px)',
          animation: 'drift1 20s ease-in-out infinite alternate'
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full bottom-0 -right-[150px] opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, #5b8af0, transparent)',
          filter: 'blur(120px)',
          animation: 'drift2 25s ease-in-out infinite alternate'
        }}
      />
    </div>
  );
}
