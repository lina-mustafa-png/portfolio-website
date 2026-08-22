
class ExpressParcel extends StandardParcel {
    private final boolean sameDay;

    public ExpressParcel(double weightKg, double distanceKm, boolean insured,
                         String sizeTier, boolean sameDay) {
       super(weightKg, distanceKm, insured, sizeTier);
       this.sameDay = sameDay;
       
    }

    @Override
    public double shippingCost() {
        double cost = super.shippingCost();
        cost *= 1.35; // express speed premium
        if (sameDay == true){
            cost += 7.50;
        }
        return cost;
    }
}