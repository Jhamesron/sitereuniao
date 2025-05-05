// Função para alternar entre abas
function openTab(tabName) {
    // Ocultar todos os conteúdos das abas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remover a classe 'active' de todos os botões
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Mostrar o conteúdo da aba selecionada
    document.getElementById(tabName).classList.add('active');

    // Adicionar a classe 'active' ao botão clicado
    const activeButton = Array.from(tabButtons).find(button => button.getAttribute('onclick') === `openTab('${tabName}')`);
    activeButton.classList.add('active');
}

// Dados das vendas para os gráficos de 2024 vs 2025
const lojas = ['Loja 1', 'Loja 2', 'Loja 3', 'Loja 4', 'Loja 5', 'Loja 6'];
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril'];
const vendas2024 = [
    [176911.16, 161809.42, 187407.70, 174035.84], // Loja 1
    [167117.33, 159475.73, 178306.34, 151581.52], // Loja 2
    [281121.49, 276852.31, 309981.77, 262219.60], // Loja 3
    [378299.81, 384983.52, 427346.23, 354752.44], // Loja 4
    [272525.98, 259919.85, 301863.26, 275182.14], // Loja 5
    [235218.08, 231195.27, 250541.42, 227282.90]  // Loja 6
];
const vendas2025 = [
    [175524.69, 157001.74, 165553.64, 157248.49], // Loja 1
    [185485.32, 171907.53, 202901.19, 185981.40], // Loja 2
    [296518.79, 267636.62, 269556.00, 266761.37], // Loja 3
    [383036.24, 383109.22, 416925.74, 384713.08], // Loja 4
    [312214.22, 304720.79, 320660.86, 286320.00], // Loja 5
    [251415.27, 244769.05, 263140.59, 244128.03]  // Loja 6
];

// Definindo as cores para cada loja
const coresLojas = [
    'rgba(0, 191, 255, 1)',  // Loja 1: Azul brilhante
    'rgba(0, 128, 128, 1)',  // Loja 2: Verde-azulado (Teal)
    'rgba(128, 0, 128, 1)',  // Loja 3: Roxo (Purple)
    'rgba(50, 205, 50, 1)',  // Loja 4: Verde limão (Lime Green)
    'rgba(255, 215, 0, 1)',  // Loja 5: Amarelo (Yellow)
    'rgba(0, 255, 255, 1)'   // Loja 6: Ciano (Cyan)
];

// Gráfico de Barras Agrupadas (2024 vs 2025)
const ctxBarras = document.getElementById('barrasChart').getContext('2d');
new Chart(ctxBarras, {
    type: 'bar',
    data: {
        labels: lojas,
        datasets: [
            {
                label: 'Janeiro 2024',
                data: vendas2024.map(row => row[0]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.4)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Janeiro 2025',
                data: vendas2025.map(row => row[0]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.8)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Fevereiro 2024',
                data: vendas2024.map(row => row[1]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.4)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Fevereiro 2025',
                data: vendas2025.map(row => row[1]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.8)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Março 2024',
                data: vendas2024.map(row => row[2]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.4)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Março 2025',
                data: vendas2025.map(row => row[2]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.8)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Abril 2024',
                data: vendas2024.map(row => row[3]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.4)')),
                borderColor: coresLojas,
                borderWidth: 1
            },
            {
                label: 'Abril 2025',
                data: vendas2025.map(row => row[3]),
                backgroundColor: coresLojas.map(cor => cor.replace('1)', '0.8)')),
                borderColor: coresLojas,
                borderWidth: 1
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Comparação de Vendas Mensais por Loja (2024 vs 2025)',
                font: { size: 18 },
                color: '#2c3e50'
            },
            legend: {
                position: 'top',
                labels: {
                    font: { size: 12 }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Vendas (R$)',
                    font: { size: 14 }
                },
                ticks: {
                    callback: function(value) {
                        return 'R$' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Lojas',
                    font: { size: 14 }
                }
            }
        }
    }
});

// Gráfico de Linhas (2024 vs 2025)
const ctxLinhas = document.getElementById('linhasChart').getContext('2d');
new Chart(ctxLinhas, {
    type: 'line',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Loja 1 2024',
                data: vendas2024[0],
                borderColor: 'rgba(0, 191, 255, 1)',
                backgroundColor: 'rgba(0, 191, 255, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 191, 255, 1)'
            },
            {
                label: 'Loja 1 2025',
                data: vendas2025[0],
                borderColor: 'rgba(0, 191, 255, 1)',
                backgroundColor: 'rgba(0, 191, 255, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 191, 255, 1)'
            },
            {
                label: 'Loja 2 2024',
                data: vendas2024[1],
                borderColor: 'rgba(0, 128, 128, 1)',
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 128, 128, 1)'
            },
            {
                label: 'Loja 2 2025',
                data: vendas2025[1],
                borderColor: 'rgba(0, 128, 128, 1)',
                backgroundColor: 'rgba(0, 128, 128, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 128, 128, 1)'
            },
            {
                label: 'Loja 3 2024',
                data: vendas2024[2],
                borderColor: 'rgba(128, 0, 128, 1)',
                backgroundColor: 'rgba(128, 0, 128, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(128, 0, 128, 1)'
            },
            {
                label: 'Loja 3 2025',
                data: vendas2025[2],
                borderColor: 'rgba(128, 0, 128, 1)',
                backgroundColor: 'rgba(128, 0, 128, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(128, 0, 128, 1)'
            },
            {
                label: 'Loja 4 2024',
                data: vendas2024[3],
                borderColor: 'rgba(50, 205, 50, 1)',
                backgroundColor: 'rgba(50, 205, 50, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(50, 205, 50, 1)'
            },
            {
                label: 'Loja 4 2025',
                data: vendas2025[3],
                borderColor: 'rgba(50, 205, 50, 1)',
                backgroundColor: 'rgba(50, 205, 50, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(50, 205, 50, 1)'
            },
            {
                label: 'Loja 5 2024',
                data: vendas2024[4],
                borderColor: 'rgba(255, 215, 0, 1)',
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 215, 0, 1)'
            },
            {
                label: 'Loja 5 2025',
                data: vendas2025[4],
                borderColor: 'rgba(255, 215, 0, 1)',
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 215, 0, 1)'
            },
            {
                label: 'Loja 6 2024',
                data: vendas2024[5],
                borderColor: 'rgba(0, 255, 255, 1)',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 255, 255, 1)'
            },
            {
                label: 'Loja 6 2025',
                data: vendas2025[5],
                borderColor: 'rgba(0, 255, 255, 1)',
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5],
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(0, 255, 255, 1)'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Evolução das Vendas Mensais por Loja (2024 vs 2025)',
                font: { size: 18 },
                color: '#2c3e50'
            },
            legend: {
                position: 'top',
                labels: {
                    font: { size: 12 }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Vendas (R$)',
                    font: { size: 14 }
                },
                ticks: {
                    callback: function(value) {
                        return 'R$' + value.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
                    }
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Meses',
                    font: { size: 14 }
                }
            }
        }
    }
});

// Dados das vendas de Franui
const franuiAmargo = [0, 0, 3, 7, 3, 8]; // Loja 1 a Loja 6
const franuiAoLeite = [2, 4, 4, 21, 9, 5];
const franuiPink = [4, 1, 3, 19, 7, 9];

// Gráfico de Linhas Franui (combinado)
const ctxFranui = document.getElementById('franuiChart').getContext('2d');
new Chart(ctxFranui, {
    type: 'line',
    data: {
        labels: lojas,
        datasets: [
            {
                label: 'Franui Ao Leite',
                data: franuiAoLeite,
                borderColor: 'rgba(205, 133, 63, 1)', // Marrom claro
                backgroundColor: 'rgba(205, 133, 63, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(205, 133, 63, 1)'
            },
            {
                label: 'Franui Amargo',
                data: franuiAmargo,
                borderColor: 'rgba(139, 69, 19, 1)', // Marrom escuro
                backgroundColor: 'rgba(139, 69, 19, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5], // Linha pontilhada
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(139, 69, 19, 1)'
            },
            {
                label: 'Franui Pink',
                data: franuiPink,
                borderColor: 'rgba(255, 105, 180, 1)', // Rosa
                backgroundColor: 'rgba(255, 105, 180, 0.2)',
                borderWidth: 2,
                borderDash: [10, 5], // Linha tracejada
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 105, 180, 1)'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vendas de Produtos Franui por Loja (Unidades)',
                font: { size: 18 },
                color: '#2c3e50'
            },
            legend: {
                position: 'top',
                labels: {
                    font: { size: 12 }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30, // Aumentado para dar mais espaço vertical
                title: {
                    display: true,
                    text: 'Unidades Vendidas',
                    font: { size: 14 }
                },
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Lojas',
                    font: { size: 14 }
                }
            }
        }
    }
});

// Dados das vendas de Brownie da Bia
const brownieBrigadeiro = [4, 0, 6, 7, 6, 0]; // Loja 1 a Loja 6
const brownieNutella = [8, 1, 4, 20, 5, 0];
const brownieDoceDeLeite = [2, 0, 6, 4, 5, 0];
const brownieNinho = [11, 0, 6, 21, 6, 0];

// Gráfico de Linhas Brownie da Bia
const ctxBrownie = document.getElementById('brownieChart').getContext('2d');
new Chart(ctxBrownie, {
    type: 'line',
    data: {
        labels: lojas,
        datasets: [
            {
                label: 'Brigadeiro',
                data: brownieBrigadeiro,
                borderColor: 'rgba(139, 69, 19, 1)', // Marrom escuro
                backgroundColor: 'rgba(139, 69, 19, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(139, 69, 19, 1)'
            },
            {
                label: 'Nutella',
                data: brownieNutella,
                borderColor: 'rgba(153, 102, 51, 1)', // Marrom médio
                backgroundColor: 'rgba(153, 102, 51, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5], // Linha pontilhada
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(153, 102, 51, 1)'
            },
            {
                label: 'Doce de Leite',
                data: brownieDoceDeLeite,
                borderColor: 'rgba(210, 180, 140, 1)', // Caramelo
                backgroundColor: 'rgba(210, 180, 140, 0.2)',
                borderWidth: 2,
                borderDash: [10, 5], // Linha tracejada
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(210, 180, 140, 1)'
            },
            {
                label: 'Ninho',
                data: brownieNinho,
                borderColor: 'rgba(240, 248, 255, 1)', // Branco suave
                backgroundColor: 'rgba(240, 248, 255, 0.2)',
                borderWidth: 2,
                borderDash: [15, 5], // Linha com traços longos
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(240, 248, 255, 1)'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vendas de Brownies da Bia por Loja (Unidades)',
                font: { size: 18 },
                color: '#2c3e50'
            },
            legend: {
                position: 'top',
                labels: {
                    font: { size: 12 }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30, // Aumentado para dar mais espaço vertical
                title: {
                    display: true,
                    text: 'Unidades Vendidas',
                    font: { size: 14 }
                },
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Lojas',
                    font: { size: 14 }
                }
            }
        }
    }
});

// Dados das vendas de Kit Tereré Santo Antônio
const terereHibisco = [0, 1, 0, 2, 1, 0]; // Loja 1 a Loja 6
const terereLimao = [1, 1, 2, 8, 5, 1];
const terereMenta = [1, 4, 3, 11, 8, 3];
const terereTradicional = [0, 6, 2, 4, 3, 0];

// Gráfico de Linhas Kit Tereré
const ctxTerere = document.getElementById('terereChart').getContext('2d');
new Chart(ctxTerere, {
    type: 'line',
    data: {
        labels: lojas,
        datasets: [
            {
                label: 'Hibisco',
                data: terereHibisco,
                borderColor: 'rgba(153, 51, 153, 1)', // Roxo (hibisco)
                backgroundColor: 'rgba(153, 51, 153, 0.2)',
                borderWidth: 2,
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(153, 51, 153, 1)'
            },
            {
                label: 'Limão',
                data: terereLimao,
                borderColor: 'rgba(255, 255, 102, 1)', // Amarelo claro (limão)
                backgroundColor: 'rgba(255, 255, 102, 0.2)',
                borderWidth: 2,
                borderDash: [5, 5], // Linha pontilhada
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(255, 255, 102, 1)'
            },
            {
                label: 'Menta',
                data: terereMenta,
                borderColor: 'rgba(102, 255, 178, 1)', // Verde menta
                backgroundColor: 'rgba(102, 255, 178, 0.2)',
                borderWidth: 2,
                borderDash: [10, 5], // Linha tracejada
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(102, 255, 178, 1)'
            },
            {
                label: 'Tradicional',
                data: terereTradicional,
                borderColor: 'rgba(34, 139, 34, 1)', // Verde escuro (tradicional)
                backgroundColor: 'rgba(34, 139, 34, 0.2)',
                borderWidth: 2,
                borderDash: [15, 5], // Linha com traços longos
                fill: false,
                pointRadius: 5,
                pointBackgroundColor: 'rgba(34, 139, 34, 1)'
            }
        ]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Vendas de Kit Tereré Santo Antônio por Loja (Unidades)',
                font: { size: 18 },
                color: '#2c3e50'
            },
            legend: {
                position: 'top',
                labels: {
                    font: { size: 12 }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 30, // Aumentado para dar mais espaço vertical
                title: {
                    display: true,
                    text: 'Unidades Vendidas',
                    font: { size: 14 }
                },
                ticks: {
                    stepSize: 1
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Lojas',
                    font: { size: 14 }
                }
            }
        }
    }
});