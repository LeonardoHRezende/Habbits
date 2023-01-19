import { generateDaysFromYearBegginer } from '../tools/generate-days-from-year-begginer';
import HabbitDay from './HabbitDay';


const SummaryTable = () => {
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    const summaryDates = generateDaysFromYearBegginer();
    const minimunSummaryDates = 126;

    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((weekDay, index) => {
                    return (
                        <div className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
                            key={index}>
                            {weekDay}
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {
                    summaryDates.map(date => {
                        return (
                            <HabbitDay key={date.toString()} />
                        )
                    })
                }
                {
                    minimunSummaryDates - summaryDates.length > 0 &&
                    Array.from({ length: minimunSummaryDates - summaryDates.length }).map((_, index) => {
                        return (
                            <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-900 rounded-lg opacity-40 cursor-not-allowed"
                                key={index}>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SummaryTable;