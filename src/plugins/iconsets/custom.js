import { h, resolveComponent } from "vue";
// import IconTooling from "@/components/icons/IconTooling.vue"; // <- vue 파일 사용
import support from "@/assets/icons/custom/support.svg"; // <- img 태그 사용

const icons = { "icon-tooling": support };
const aliases = {};

const custom = {
  component: (props) => {
    return h(
      props.tag,
      { class: ["custom", props.icon] },
      // h(resolveComponent(props.icon)) // <- vite-svg-loader 패키지 적용
      // h(icons[props.icon]) // <- vue 파일 사용
      h("img", { src: icons[props.icon] }) // <- img 태그 사용
    );
  },
};

export { aliases, custom };
