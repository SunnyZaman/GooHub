import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function Chart(props: any) {
    const { data, title } = props;
    return (
        <div>
            <HorizontalBar
                data={data}
                options={{
                    legend: {
                        display: false
                    },
                    scales:{
                        xAxes: [
                            {
                              ticks: {
                                beginAtZero: true,
                                precision: 0,
                              },
                            },
                          ],
                    },
                    responsive: true,
                    title: { text: title, display: true }
                }}
            />
        </div>
    );
}

export default Chart;
