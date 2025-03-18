<script lang="ts">
	import type { DetailedSavings } from '../../types/api-types';
	import SectionHeader from './SectionHeader.svelte';

	export let tableData: DetailedSavings[];

	const tableHeaders: string[] = Object.keys(tableData[0]);
</script>

<div class="w-full rounded-2xl border-1 border-[#3E404D]">
	<header class="border-b-1 border-[#3E404D] p-4 md:p-8">
		<SectionHeader text="Detailed Savings" />
	</header>

	<table class="w-full">
		<thead>
			<tr>
				{#each tableHeaders as title}
					<th class="bg-[#3E404D] px-4 py-5 text-left font-normal uppercase md:px-8">{title}</th>
				{/each}
			</tr>
		</thead>
		<tbody class="w-full">
			{#each tableData as { date, service, amount }}
				<tr class="w-full border-b border-[#3E404D] last:border-b-0">
					<td class="font-satoshi px-4 py-5 md:px-8">{date}</td>
					<td class="font-satoshi px-4 py-5 md:px-8">{service}</td>
					<td class="font-satoshi px-4 py-5 md:px-8">${amount.toFixed(2)}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
