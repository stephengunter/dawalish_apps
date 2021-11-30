<template>
<div>
	
	
	
</div>	
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { CHECK_AUTH, REFRESH_TOKEN } from '@/store/actions.type';
export default {
	name: 'HomeView',
	data() {
		return {
			
		}
	},
	computed:{
		...mapGetters(['isAuthenticated', 'currentUser','responsive'])
	},
	beforeMount() {
		
	},
	methods: {
		
	}
}
</script>
