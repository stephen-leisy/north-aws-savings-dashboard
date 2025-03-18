<script lang="ts">
	export let title: string;
	export let value: number;
	export let isPercentage: boolean = false;
</script>

<div
	class="flex h-[150px] w-full flex-col justify-between rounded-2xl border-1 border-[#3E404D] p-8 md:w-sm"
>
	<p class="text-base text-[#F8DAFE] uppercase">{title}</p>
	<div class="flex items-center gap-2">
		<p class="text-[28px]">{isPercentage ? `${value}%` : `$${value.toFixed(2)}`}</p>
		<slot />
	</div>
</div>
