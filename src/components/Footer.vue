<template>
    <div id="footer">
        <el-row>
            <el-col :span="24" class="colFooter" align="right">
                <br>
                <small><i>&copy; La Red Marketing & Diseño 2018 by <a href="http://www.laredmd.com">laredmd</a></i></small>
                <br>
                <br>
            </el-col>
        </el-row>
    </div>
</template>


<script>
    export default {
        name: 'Footer',
        data()
        {   return { };
        },
    }
</script>


<style>
    .colFooter
    {   background: #545C64;
        color: #fff;
    }
</style>