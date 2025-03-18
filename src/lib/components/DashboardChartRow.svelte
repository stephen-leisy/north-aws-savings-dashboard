<script lang="ts">
	import BarChart from '$lib/components/charts/BarChart.svelte';
	import ChartWrapper from '$lib/components/ChartWrapper.svelte';
	import type { SavingsByCategory, SavingsTrends } from '../../types/api-types';
	import LineChart from './charts/LineChart.svelte';

	export let savingsByCategory: SavingsByCategory[];
	export let savingsTrends: SavingsTrends[];

	const serviceLabels = savingsByCategory.map((item) => item.service);
	const savingsLabel = savingsByCategory.map((item) => item.savings);

	const trendsLabels = savingsTrends.map((item) => item.month);
	const trendsSavings = savingsTrends.map((item) => item.savings);
</script>

<div class="flex w-full flex-col gap-8 overflow-x-scroll lg:flex-row">
	<ChartWrapper title="Savings Trends">
		<LineChart labels={trendsLabels} data={trendsSavings} />
	</ChartWrapper>
	<ChartWrapper title="Savings By Category"
		><BarChart labels={serviceLabels} data={savingsLabel} /></ChartWrapper
	>
</div>
