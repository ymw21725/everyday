// let tmp = executable();
export default function executable(DELAYTIME) {
    let beforeEventTime = -new Date();
        return function() {
            if(new Date() - beforeEventTime > DELAYTIME + 100) {  
                beforeEventTime = new Date();

                return true;
        }
    }
}