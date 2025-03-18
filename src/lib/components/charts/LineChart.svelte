<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import type { ChartOptions } from 'chart.js';
	let chartCanvas: HTMLCanvasElement | null = null;
	let chartInstance: Chart | null = null;

	export let labels: string[] = [];
	export let data: number[] = [];

	const colibri = '#9747FF';

	onMount(() => {
		if (chartCanvas) {
			chartInstance = new Chart(chartCanvas, {
				type: 'line',
				data: {
					labels,
					datasets: [
						{
							data,
							borderColor: colibri,
							backgroundColor: 'rgba(151, 71, 255, 0.2)',
							borderWidth: 2,
							pointRadius: 5,
							pointBackgroundColor: colibri,
							fill: true,
							tension: 0.3
						}
					]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							callbacks: {
								label: function (context) {
									let value = context.raw as number;
									return `$${value.toFixed(2)}`;
								}
							}
						}
					},
					scales: {
						x: {
							grid: {
								color: '#3E404D'
							},
							ticks: {
								color: 'white'
							}
						},
						y: {
							beginAtZero: true,
							grid: {
								color: '#3E404D'
							},
							ticks: {
								color: 'white',
								callback: function (value) {
									return `$${value}`;
								}
							}
						}
					}
				} as ChartOptions<'line'>
			});
		}

		return () => {
			chartInstance?.destroy();
		};
	});
</script>

<div class="relative h-64 w-full lg:max-w-[461px]">
	<canvas bind:this={chartCanvas} class="h-56 w-full"></canvas>
</div>
