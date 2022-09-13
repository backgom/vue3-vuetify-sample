import { h, resolveComponent } from "vue";

const aliases = {
  logo: "logo1",
  support: "support1",
  ecosystem: "ecosystem1",
};

const custom = {
  component: (props) => {
    console.log("props.icon", props.icon);
    return h(
      props.tag,
      { class: ["custom", props.icon] },
      h(resolveComponent(props.icon))
    );
  },
};

export { aliases, custom };
