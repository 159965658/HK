import Vue from 'vue';
import { Prop, Component } from 'vue-property-decorator';



@Component
export default class Icon extends Vue {
    @Prop(String)
    public name!: string;
    public render() {
        return (
            <svg class="icon" aria-hidden="true">
                <use xlinkHref={`#${this.name}`} />
                {/* {`#${this.name}`} */}
            </svg>)
    }
}