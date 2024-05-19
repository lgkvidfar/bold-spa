import ChangeBgCard from "../../../../comps/animations/change-bg-card/ChangeBgCard";
import { IService } from "../../../../utils/arrays/services";
import colors from "../../../../utils/strings/colors";

function ServiceCard({ service }: { service: IService }) {
  return (
    <ChangeBgCard
      triggerId={service.serviceId}
      childrenId={service.serviceId}
      fromColorBg={colors.light50}
      fromColorText={colors.dark}
    >
      <div
        id={service.serviceId}
        className="relative flex min-h-96 w-full flex-col gap-2 border border-bpink p-4"
      >
        <div className="flex gap-2 text-2xl">
          <span className="font-semibold text-bpink">
            {service.serviceNumber}
          </span>
          <span>{service.serviceTitle}</span>
        </div>
        <p className="p-8 text-base font-light">{service.serviceDescription}</p>
        <img
          className="absolute inset-0 z-[-1] h-full w-full object-cover opacity-30 "
          src={service.serviceImage}
          alt={service.serviceTitle}
        />
      </div>
    </ChangeBgCard>
  );
}

export default ServiceCard;
