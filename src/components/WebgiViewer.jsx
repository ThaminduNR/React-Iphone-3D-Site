import React, { useCallback, useEffect, useRef } from 'react';
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  mobileAndTabletCheck,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
} from 'webgi';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const WebgiViewer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    setupViewer();
  }, []);

  const setupViewer = useCallback(async () => {
    try {
      const viewer = new ViewerApp({
        canvas: canvasRef.current,
      });

      const manager = await viewer.addPlugin(AssetManagerPlugin);

      // viewer.renderer.renderScale = Math.min(window.devicePixelRatio, 2);

      // Add plugins individually.
      await viewer.addPlugin(GBufferPlugin);
      // await viewer.addPlugin(new ProgressivePlugin(32))
      // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
      await viewer.addPlugin(GammaCorrectionPlugin);
      await viewer.addPlugin(SSRPlugin);
      // await viewer.addPlugin(SSAOPlugin)
      // await viewer.addPlugin(DiamondPlugin)
      // await viewer.addPlugin(FrameFadePlugin)
      // await viewer.addPlugin(GLTFAnimationPlugin)
      // await viewer.addPlugin(GroundPlugin)
      await viewer.addPlugin(BloomPlugin);
      // await viewer.addPlugin(TemporalAAPlugin)
      // await viewer.addPlugin(AnisotropyPlugin)
      // and many more...

      // or use this to add all main ones at once.
      // await addBasePlugins(viewer); // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

      // Required for downloading files from the UI
      // await viewer.addPlugin(FileTransferPlugin)

      // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
      await viewer.addPlugin(CanvasSnipperPlugin);

      // Import and add a GLB file.
      await manager.addFromPath('/scene-black.glb');

      // Load an environment map if not set in the glb file
      // await viewer.setEnvironmentMap("./assets/environment.hdr");

      await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm));
    } catch (error) {
      console.error('Error setting up viewer:', error);
    }
  }, []);

  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
};

export default WebgiViewer;
