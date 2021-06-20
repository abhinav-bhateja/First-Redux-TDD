import {configure} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({
    adapter: new Adapter(),
    disableLifeCycleMethods: true,
    addSnapshotSerializer: ["enzyme-to-json/serializer"]
});