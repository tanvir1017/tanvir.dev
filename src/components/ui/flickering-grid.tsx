import { FlickeringGrid } from "../framework-components/flickering-grid";

const FlickeringGridWrapper = () => {
  return (
    <div className="absolute inset-0 top-0 left-0 right-0 h-25 overflow-hidden z-0">
      <FlickeringGrid
        className="h-full w-full"
        squareSize={2}
        gridGap={1}
        style={{
          maskImage: "linear-gradient(to bottom, black, transparent)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
        }}
      />
    </div>
  );
};

export default FlickeringGridWrapper;
