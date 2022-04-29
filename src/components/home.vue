<template>
    <el-container style="height: 100vh;padding:1% 3% 0 3%">



        <el-aside style="padding: 20px 30px 0 0">
            <h3>Linux操作系统</h3>

                <el-divider></el-divider>

        </el-aside>




        <el-container style="padding: 20px 50px">

           <div>
               <el-form :model="form" label-width="80px">
                   <el-form-item label="IP 地址">
                       <el-input v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="端口号">
                       <el-input v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="用户名">
                       <el-input v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="密码">
                       <el-input v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="操作系统">
                       <el-select v-model="form.region" placeholder="请选择操作系统">
                           <el-option label="Ubantu20" value="shanghai"></el-option>
                           <el-option label="Centos7" value="beijing"></el-option>
                       </el-select>
                   </el-form-item>
                   <el-form-item label="特殊资源">
                       <el-radio-group v-model="form.resource">
                           <el-radio label="二级"></el-radio>
                           <el-radio label="三级"></el-radio>
                       </el-radio-group>
                   </el-form-item>

                   <el-form-item>
                       <el-button type="primary" @click="onSubmit">开始检测</el-button>
                       <el-button>取消</el-button>
                   </el-form-item>
               </el-form>
           </div>





        </el-container>
    </el-container>



</template>

<script>
    export default {
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style>



</style>