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
				type: 'bar',
				data: {
					labels,
					datasets: [
						{
							data,
							borderRadius: 6,
							backgroundColor: colibri
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
								color: 'white'
							}
						}
					}
				} as ChartOptions<'bar'>
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
