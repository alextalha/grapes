const editor = grapesjs.init({
  container: "#editor",
  fromElement: true,
  width: "auto",
  StorageManager: false,
  plugins: ["gjs-preset-webpage"],
  pluginsOpt: {
    "gjs-preset-webpage": {},
  },
});
