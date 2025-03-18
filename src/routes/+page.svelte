<script lang="ts">
	import BasicTable from '$lib/components/BasicTable.svelte';
	import DashboardChartRow from '$lib/components/DashboardChartRow.svelte';
	import DashboardWrapper from '$lib/components/DashboardWrapper.svelte';
	import Overview from '$lib/components/Overview.svelte';
	import type { AWSDashboardPropTypes } from '../types/api-types';

	export let data: { success: boolean; data: AWSDashboardPropTypes };
</script>

{#if data?.success}
	<DashboardWrapper>
		<Overview overview={data.data.overview} />
		<DashboardChartRow
			savingsByCategory={data.data.savingsByCategory}
			savingsTrends={data.data.savingsTrends}
		/>
		<BasicTable tableData={data.data.detailedSavings} />
	</DashboardWrapper>
{:else}
	<DashboardWrapper>
		<p>No Data To Show!</p>
	</DashboardWrapper>
{/if}
