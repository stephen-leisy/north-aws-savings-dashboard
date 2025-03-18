<script lang="ts">
	import BasicTable from '$lib/components/BasicTable.svelte';
	import DashboardChartRow from '$lib/components/DashboardChartRow.svelte';
	import DashboardWrapper from '$lib/components/DashboardWrapper.svelte';
	import Overview from '$lib/components/Overview.svelte';
	import type { AWSDashboardPropTypes } from '../types/api-types';

	export let data: AWSDashboardPropTypes;

	const { overview, savingsByCategory, savingsTrends, detailedSavings } = data;
</script>

{#if data}
	<DashboardWrapper>
		<Overview {overview} />
		<DashboardChartRow {savingsByCategory} {savingsTrends} />
		<BasicTable tableData={detailedSavings} />
	</DashboardWrapper>
{:else}
	<p>No Data!</p>
{/if}
