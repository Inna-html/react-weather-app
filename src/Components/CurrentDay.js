import {format} from 'date-fns';



export default function CurrentDay() {

    return (
        <div className='data'>
            {format(new Date(), 'EEEE, MMM do')}
        </div>
    )
} 

