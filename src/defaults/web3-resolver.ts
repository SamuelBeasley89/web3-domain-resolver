import { ConnectionLibrary } from "../networks/connections/connection-library";
import { FreenameResolverProvider } from "../resolver-providers/providers/freename/freename-resolver-provider";
import { UDResolverProvider } from "../resolver-providers/providers/ud/ud-resolver-provider";
import { Resolver } from "../resolvers/resolver";

export class Web3Resolver extends Resolver {
    constructor(connectionLibrary?: ConnectionLibrary) {
        const freenameResolverProvider = new FreenameResolverProvider({ connectionLibrary: connectionLibrary });
        const udResolverProvider = new UDResolverProvider();

        super([freenameResolverProvider, udResolverProvider])
    }
}