const customIconPlugin = {
  install(app) {
    const svgIcons = import.meta.glob("@/assets/icons/custom/*.svg", {
      eager: true,
    });

    Object.entries(svgIcons).forEach(([icon, svg]) => {
      const iconTag = /\/(\w*)\.svg/.exec(icon)[1];

      console.log(iconTag, svg);

      app.component(iconTag, svg);
    });
  },
};

export default customIconPlugin;
