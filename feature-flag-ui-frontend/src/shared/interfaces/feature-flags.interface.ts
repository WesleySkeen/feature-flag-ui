enum FeatureFlagTriggerType {
    CompanyId,
    Percentage
}

export interface CompanyIdFeatureFlagTrigger extends FeatureFlagTrigger {
    companyIds: number[];
}

export interface PercentageFeatureFlagTrigger extends FeatureFlagTrigger {
    percentage: number
}

export interface FeatureFlagTrigger {
    id: string;
    types: FeatureFlagTriggerType[];
    isEnabled: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface FeatureFlag {
    id: string;
    name: string;
    description: string;
    isEnabled: boolean;
    triggers: FeatureFlagTrigger[];
    createdAt: Date;
    updatedAt: Date;
}