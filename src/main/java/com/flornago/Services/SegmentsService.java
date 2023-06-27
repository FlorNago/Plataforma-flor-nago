package com.flornago.Services;

import org.springframework.stereotype.Service;

import com.flornago.Data.SegmentData;
import com.flornago.Exceptions.NotFoundException;

@Service
public class SegmentsService {

    public static final SegmentData[] ALL_SEGMENT_DATAS = {
            new SegmentData(0, "Outros"),
            new SegmentData(1, "Tranças"),
            new SegmentData(2, "Acessórios"),
            new SegmentData(3, "Maquiagem"),
            new SegmentData(4, "Cuidados")
    };

    public SegmentData[] getAllSegments() {
        return ALL_SEGMENT_DATAS;
    }

    public SegmentData getSegmentById(Integer id) {
        for (SegmentData segmentData : ALL_SEGMENT_DATAS) {
            if (segmentData.getSegment_id().equals(id)) {
                return segmentData;
            }
        }

        throw new NotFoundException("Segmento não encontrado");
    }
}
