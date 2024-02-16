document.addEventListener('DOMContentLoaded', function () {
    // Plugin Chart Defered - To scroll bars over scroll
    Chart.register(ChartDeferred);

    // Set global options for the deferred plugin
    Chart.defaults.plugins.deferred = {
        xOffset: 150, // defer until 150px of the canvas width are inside the viewport
        yOffset: '50%', // defer until 50% of the canvas height is inside the viewport
        delay: 500 // delay of 500 ms after the canvas is considered inside the viewport
    };

    // Función para detectar si el dispositivo es móvil
    function isMobile() {
        return window.innerWidth <= 479;
    }

    var mobileOptions = {
        indexAxis: 'y', // Hace que la gráfica sea horizontal en móviles
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                anchor: 'end',
                align: 'right',
                formatter: function (value, context) {
                    return value !== 0 ? (value * 100).toFixed(1) + '%' : '';
                },
                color: 'black',
                font: {
                    weight: 'bold',
                    size: 12,
                }
            },
            tooltips: {
                enabled: false
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function (value) {
                        return (value * 100) + '%'; // Ajusta formato de etiquetas en eje X para móviles
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    autoSkip: false,
                    font: {
                        size: 10,
                        lineHeight: 1.2
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    };

    var optionsDoughnut = {
        cutout: 75, // Grosor de la dona
        plugins: {
            datalabels: {
                color: '#fff', // Color del texto de los valores
                formatter: (value, ctx) => {
                    return (value * 100).toFixed(0) + '%'; // Formato para mostrar los valores
                },
                font: {
                    weight: 'bold', // Peso del texto (bold)
                    size: 14 // Tamaño del texto
                }
            }
        },
        legend: {
            display: true, // Mostrar leyendas
            position: 'bottom', // Posición de las leyendas
            labels: {
                fontColor: '#333', // Color del texto de las leyendas
            }
        }
    };

    var optionsBarVertical = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    autoSkip: false,
                    font: {
                        size: 10
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                max: 1,
                ticks: {
                    callback: function (value, index, values) {
                        var formattedValue = (value * 100).toFixed(1);
                        return formattedValue.replace(/\.0$/, '') + "%";
                    },
                    font: {
                        size: 10
                    }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                color: 'black',
                anchor: 'end',
                align: 'top',
                formatter: function (value, context) {
                    return value !== 0 ? (value * 100).toFixed(1) + '%' : '';
                },
                font: {
                    weight: 'bold',
                    size: 14
                }
            },
            tooltips: {
                enabled: false
            }
        }
    };

    var optionsBarVerticalInter = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            x: {
                ticks: {
                    maxRotation: 0,
                    autoSkip: false,
                    font: {
                        size: 10
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value, index, values) {
                        return value;
                    },
                    font: {
                        size: 10
                    }
                },
                grid: {
                    display: false
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            datalabels: {
                color: 'white',
                anchor: 'end',
                align: 'end', // Cambiado para intentar posicionar los labels justo antes del final de la barra
                offset: -25, // Ajusta este valor según necesites para mover el label hacia dentro de la barra
                formatter: function (value, context) {
                    return value !== 0 ? value : '';
                },
                font: {
                    weight: 'bold',
                    size: 14
                }
            },
            tooltips: {
                enabled: false
            }
        }
    };

    // Exponer configuraciones al objeto window si necesitas que sean accesibles desde otros archivos
    window.chartOptions = {
        mobileOptions: mobileOptions,
        optionsDoughnut: optionsDoughnut,
        optionsBarVertical: optionsBarVertical,
        optionsBarVerticalInter: optionsBarVerticalInter,
        isMobile: isMobile
    };
});
