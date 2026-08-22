class StandardParcel extends Parcel {
    // sizeTier: S/M/L affects handling
    protected final String sizeTier;

    public StandardParcel(double weightKg, double distanceKm, boolean insured, String sizeTier) {
        super(weightKg, distanceKm, insured);
        if (!sizeTier.matches("[SML]")) {
            throw new IllegalArgumentException("sizeTier must be S, M, or L");
        }
        this.sizeTier = sizeTier;
    }

    @Override
    public double shippingCost() {
        double cost = super.shippingCost();
        double handling= 0;
        if (null != sizeTier)
        //Write lines of codes that calculates handeling based on sizeTier
        switch (sizeTier) {
            case "S":
                handling = 0.75;
                break;
            case "M":
                handling = 1.25;
                break;
            case "L":
                handling = 1.75;
                break;
            default:
                break;
        }
       
    return cost + handling;
    }

}
