<script lang="ts">
	import SectionHeader from './SectionHeader.svelte';

	export let title: string;
</script>

<div class="flex w-full flex-col gap-6 rounded-2xl border-1 border-[#3E404D] p-4 md:flex-1 md:p-8">
	<SectionHeader text={title} />
	<slot />
</div>
