/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const ErrorExample: core.serialization.ObjectSchema<serializers.ErrorExample.Raw, FernOpenapiIr.ErrorExample> =
    core.serialization.objectWithoutOptionalProperties({
        name: core.serialization.string().optional(),
        description: core.serialization.string().optional(),
        example: core.serialization.lazy(() => serializers.FullExample),
    });

export declare namespace ErrorExample {
    export interface Raw {
        name?: string | null;
        description?: string | null;
        example: serializers.FullExample.Raw;
    }
}
