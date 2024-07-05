import React, { useEffect } from 'react';
import nipplejs from 'nipplejs';

const Joystick = () => {
  useEffect(() => {
    const ws = new WebSocket("/ws");

    const createJoystick = (id, lock) => nipplejs.create({
      zone: document.getElementById(id),
      mode: 'static',
      position: { left: '50%', top: '50%' },
      ...lock,
    });

    const handleMove = (prefix) => (evt, nipple) => {
      const { degree: angle, distance } = nipple.angle;
      console.log(`${prefix} moved. Angle: ${angle}, Distance: ${distance}`);
      ws.send(`${prefix}_${angle}_${distance}`);
    };

    const handleEnd = (prefix) => () => {
      console.log(`${prefix} released!`);
      ws.send(`${prefix}_-1_0`);
    };

    const manager1 = createJoystick('joystick1-container', { lockY: true });
    manager1.on('start', () => console.log("Joystick1 touched!"))
            .on('end', handleEnd("speed"))
            .on('move', handleMove("speed"));

    const manager2 = createJoystick('joystick2-container', { lockX: true });
    manager2.on('start', () => console.log("Joystick2 touched!"))
            .on('end', handleEnd("direction"))
            .on('move', handleMove("direction"));

    return () => {
      manager1.destroy();
      manager2.destroy();
    };
  }, []);

  const containerStyle = {
    width: '200px',
    height: '200px',
    backgroundColor: '#732a2a',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '100vh', margin: 0, backgroundColor: 'black' }}>
      <div id="joystick1-container" style={containerStyle}></div>
      <div id="joystick2-container" style={containerStyle}></div>
    </div>
  );
};

export default Joystick;
