<template>
  <el-cascader
    v-model="modelVal"
    v-bind="$attrs"
    v-on="$listeners"
    :options="_initAddressData(grade)"
  ></el-cascader>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import area from './area.json'

@Component({
  name: 'ElmAddressCascader'
})
export default class ElmAddressCascader extends Vue {
  // 选择显示几级
  @Prop({ default: 3 }) private grade!: number
  @Prop({}) private value!: any

  // 省市区json数据
  private areaObjJSON: any = area
  // v-model值
  private modelVal: any = this.value

  // 初始化地区显示数据
  private _initAddressData (grade: number) {
    let result: Array<any> = []
    const AREA_JSON = this.areaObjJSON
    AREA_JSON.forEach((provice: any) => {
      let cityArr: any = []
      if (provice.id && grade > 1) {
        provice.children.forEach((city: any) => {
          let area: Array<any> = []
          if (city.children && city.children.length > 0 && grade > 2) {
            city.children.forEach((country: any) => {
              area.push({
                value: country.id,
                label: country.name
              })
            })
          }
          let cityObject: any = {
            value: city.id,
            label: city.name
          }
          if (grade > 2 && area.length) {
            cityObject.children = area
          }
          cityArr.push(cityObject)
        })
      }
      result.push({
        value: provice.id,
        label: provice.name,
        children: grade > 1 ? cityArr : null
      })
    })
    return result
  }
}
</script>