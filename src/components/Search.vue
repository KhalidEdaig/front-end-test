<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import useDebouncedRef from '../composables/useDebouncedRef'
import Details from './Details.vue'

let searchQuery = useDebouncedRef('', 500)
const detailsBien = ref({})

onMounted(() => {
    store.dispatch('biens/GET_BIENS')
})

const store = useStore()
const biens = computed(() => store.state.biens.biens)

const searchedBiens = computed({
    get() {
        return biens.value.filter((bien) => {
            return bien.address_line1.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
        })
    },
})

watch(searchQuery, (newQuery) => {
    detailsBien.value = {}
})
</script>

<template>
    <div class="bg-white py-16 sm:py-24">
        <div class="relative sm:py-16">
            <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="relative rounded-2xl px-6 py-10 bg-indigo-600 overflow-hidden shadow-xl sm:px-12 sm:py-20">
                    <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0">
                        <svg class="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1463 360">
                            <path class="text-indigo-500 text-opacity-40" fill="currentColor" d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z" />
                            <path class="text-indigo-700 text-opacity-40" fill="currentColor" d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z" />
                        </svg>
                    </div>
                    <div class="relative">
                        <div class="sm:text-center">
                            <h2 class="text-3xl font-bold text-white tracking-tight sm:text-4xl sm:tracking-tight">Search Proprety</h2>
                        </div>
                        <form action="#" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                            <div class="min-w-0 flex-1">
                                <label for="cta-email" class="sr-only">Address Proprety</label>
                                <input
                                    id="address"
                                    type="text"
                                    class="block w-full border border-transparent rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                                    placeholder="Enter Address"
                                    v-model="searchQuery"
                                />
                            </div>
                            <div class="mt-4 sm:mt-0 sm:ml-3">
                                <button
                                    type="submit"
                                    class="inline-flex items-center rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
                                >
                                    Search

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 -mr-1 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 sm:px-6 lg:px-8">
            <div class="mt-8 flex flex-col">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-300">
                                <thead class="bg-gray-50">
                                    <tr>
                                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Adresse line 1</th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Vile</th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Prix</th>
                                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6"></th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 bg-white">
                                    <tr v-for="(bien, index) in searchedBiens" :key="index">
                                        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ bien.address_line1 }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ bien.ville }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ bien.type }}</td>
                                        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ bien.prix + bien.unit }}</td>
                                        <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                            <a href="#" class="text-indigo-600 hover:text-indigo-900" @click.prevent="detailsBien = bien">Details</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Details v-show="Object.keys(detailsBien).length" :bien="detailsBien" />
    </div>
</template>
