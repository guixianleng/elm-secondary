<!--
 * @Author: LenGxin
 * @Description: 自定义 render
 * @Date: 2020-03-11 13:35:17
 * @LastEditors: LenGxin
 * @LastEditTime: 2020-03-12 09:51:21
-->
<script>
export default {
  name: 'TableRender',
  functional: true,
  props: {
    scope: Object,
    render: Function
  },
  render: (h, ctx) => {
    return ctx.props.render(h, ctx.props.scope)
  }
}
</script>
