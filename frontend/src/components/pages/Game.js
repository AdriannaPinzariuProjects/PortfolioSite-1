import React, { useEffect, useState } from "react";

function SpaceInvaders() {
  const [player, setPlayer] = useState({ x: 50, y: 90 });
  const [bullets, setBullets] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setAliens(new Array(20).fill(0).map((_, i) => ({ x: (i % 10) * 10, y: Math.floor(i / 10) * 10 })));
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.code === "ArrowRight" && player.x < 90) {
        setPlayer({ ...player, x: player.x + 10 });
      } else if (e.code === "ArrowLeft" && player.x > 0) {
        setPlayer({ ...player, x: player.x - 10 });
      } else if (e.code === "Space") {
        setBullets([...bullets, { x: player.x, y: player.y - 1 }]);
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [player, bullets]);

  useEffect(() => {
    const handle = setInterval(() => {
      setBullets((bullets) =>
        bullets
          .map((b) => ({ ...b, y: b.y - 1 }))
          .filter((b) => b.y > 0 && !aliens.find((a) => a.x === b.x && a.y === b.y))
      );
      setAliens((aliens) =>
        aliens.map((a) => ({ ...a, y: a.y + 0.1 })).filter((a) => a.y < 90 && !bullets.find((b) => b.x === a.x && b.y === a.y))
      );
    }, 100);
    return () => {
      clearInterval(handle);
    };
  }, [bullets, aliens]);

  useEffect(() => {
    if (aliens.find((a) => a.y >= player.y)) {
      setGameOver(true);
    }
  }, [aliens, player]);

  return (
    <div style={{ position: "relative", height: "400px", width: "400px", border: "1px solid" }}>
      {!gameOver ? (
        <>
          <div
            style={{ position: "absolute", bottom: `${player.y}%`, left: `${player.x}%`, width: "10%", height: "10%", background: "blue" }}
          />
          {bullets.map((b, i) => (
            <div key={i} style={{ position: "absolute", bottom: `${b.y}%`, left: `${b.x}%`, width: "2%", height: "5%", background: "green" }} />
          ))}
          {aliens.map((a, i) => (
            <div key={i} style={{ position: "absolute", bottom: `${a.y}%`, left: `${a.x}%`, width: "10%", height: "10%", background: "red" }} />
          ))}
        </>
      ) : (
        <div>Game Over!</div>
      )}
    </div>
  );
}

export default SpaceInvaders;
