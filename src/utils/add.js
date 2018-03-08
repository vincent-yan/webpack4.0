/**
 * Created by vincent.yan on 2018/3/8.
 */
export  default takeLongTime=>{
    return new Promise(resolve => {
        setTimeout(() => resolve("long_time_value"), 1000);
    });
}


