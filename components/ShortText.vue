<template>
    <span>
    </span>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
            chunks: [],
        }
    },
    props: {
        text: {
            type: String,
            required: true,
        },
        target: {
            type: Number,
            required: true,
        }
    },
    created() {
        this.chunks = this.getChunks()
    },
    methods: {
        getChunks() {
            const position = this.text.indexOf('', this.target)
            if(this.text.length <= this.target || position === -1 ) return [this.text]
            return [this.text.substring(0, position), this.text.subString(position)]
        }
    }
}
</script>